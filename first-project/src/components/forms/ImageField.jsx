import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import { useField } from "formik"
import { FormMessage } from "@/components/ui/form"


export function ImageField({ name, label = "Profile Picture", defaultImageUrl = "", className = "" }) {
  const [field, meta, helpers] = useField(name)
  const [preview, setPreview] = useState(defaultImageUrl || null)
  const fileInputRef = useRef(null)
  const hasError = meta.touched && meta.error

  useEffect(() => {
    // Initialize with default image if provided
    if (defaultImageUrl && !field.value) {
      helpers.setValue(defaultImageUrl)
    }
  }, [defaultImageUrl, field.value, helpers])

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const result = reader.result
        setPreview(result)
        helpers.setValue(file) // Store the file object for formik
        helpers.setTouched(true)
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <Label htmlFor={name} className="text-center">
        {label}
      </Label>
      <div className="relative">
        <div className="h-24 w-24 rounded-full bg-purple-200 overflow-hidden">
          {preview ? (
            <img
              src={preview || "/placeholder.svg"}
              alt="Avatar preview"
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-gray-400">No image</div>
          )}
        </div>
        <Button
          type="button"
          size="icon"
          variant="secondary"
          className="absolute bottom-0 right-0 h-8 w-8 rounded-full shadow-md border border-gray-200"
          onClick={triggerFileInput}
        >
          <Pencil className="h-4 w-4" />
        </Button>
      </div>
      <Input
        ref={fileInputRef}
        id={name}
        name={name}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          handleFileChange(e)
        }}
        onBlur={field.onBlur}
      />
      {hasError && <FormMessage className="text-red-500 text-sm mt-1">{meta.error}</FormMessage>}
    </div>
  )
}

