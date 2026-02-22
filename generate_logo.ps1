Add-Type -AssemblyName System.Drawing
$width = 1024
$height = 1024
$bitmap = New-Object Drawing.Bitmap $width, $height
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias

# Background: Dark #121212
$bgColor = [System.Drawing.ColorTranslator]::FromHtml("#121212")
$graphics.Clear($bgColor)

# Text: "3" in Emerald #10B981
$textColor = [System.Drawing.ColorTranslator]::FromHtml("#10B981")
$brush = New-Object Drawing.SolidBrush $textColor

# Font
$font = New-Object Drawing.Font("Arial", 600, [System.Drawing.FontStyle]::Bold)

# Centering
$format = New-Object System.Drawing.StringFormat
$format.Alignment = [System.Drawing.StringAlignment]::Center
$format.LineAlignment = [System.Drawing.StringAlignment]::Center

$rect = New-Object Drawing.RectangleF 0, 0, $width, $height
$graphics.DrawString("3", $font, $brush, $rect, $format)

$bitmap.Save("c:\Users\mr_right\Desktop\projects\olumide\three\assets\app_logo.png", [System.Drawing.Imaging.ImageFormat]::Png)

$graphics.Dispose()
$bitmap.Dispose()
