# create-zip.ps1
# Creates idariji-V5.zip from the dist/ folder.
# Uses .NET ZipFile so ALL files are included:
#   - Hidden files like .htaccess
#   - All JS, CSS, images, fonts

Add-Type -Assembly 'System.IO.Compression.FileSystem'

$root    = Split-Path -Parent $PSScriptRoot
$outPath = Join-Path $root 'dist'
$zipPath = Join-Path $root 'idariji-V8.zip'

if (-not (Test-Path $outPath)) {
  Write-Host "ERROR: 'dist' folder not found. Run 'npm run build' first." -ForegroundColor Red
  exit 1
}

if (Test-Path $zipPath) {
  Remove-Item $zipPath -Force
  Write-Host "Removed old zip."
}

Write-Host "Zipping '$outPath' ..."
[System.IO.Compression.ZipFile]::CreateFromDirectory($outPath, $zipPath)

$size = [math]::Round((Get-Item $zipPath).Length / 1MB, 2)
Write-Host ""
Write-Host "Done!  idariji-V8.zip ($size MB)" -ForegroundColor Green
Write-Host ""
Write-Host "Upload this zip to cPanel and extract it into public_html/"
Write-Host "Make sure to overwrite (not merge) existing files."
