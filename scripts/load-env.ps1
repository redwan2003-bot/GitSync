# Load root .env into the current PowerShell session (strips surrounding quotes)
param([string]$EnvFile = ".env")

$path = Join-Path (Get-Location) $EnvFile
if (-not (Test-Path $path)) {
  Write-Warning "Env file not found: $path"
  exit 1
}

Get-Content $path | ForEach-Object {
  if ($_ -match '^\s*#' -or $_ -match '^\s*$') { return }
  if ($_ -match '^\s*([^=]+)=(.*)$') {
    $key = $matches[1].Trim()
    $value = $matches[2].Trim()
    if ($value.StartsWith('"') -and $value.EndsWith('"')) {
      $value = $value.Substring(1, $value.Length - 2)
    }
    [Environment]::SetEnvironmentVariable($key, $value, "Process")
  }
}
