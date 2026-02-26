param([int]$PageNumber = 4)

Add-Type -AssemblyName Windows.Data
Add-Type -AssemblyName Windows.Storage

$pdfPath = "C:\Users\Eshwar Paygude\Downloads\Win Win End Mills_Brochure Final 28.10.2025 (Compressed).pdf"
$outPng  = "C:\Users\Eshwar Paygude\Downloads\page$PageNumber.png"

$file = [Windows.Storage.StorageFile,Windows.Storage,ContentType=WindowsRuntime]::GetFileFromPathAsync($pdfPath).GetAwaiter().GetResult()
$doc  = [Windows.Data.Pdf.PdfDocument,Windows.Data.Pdf,ContentType=WindowsRuntime]::LoadFromFileAsync($file).GetAwaiter().GetResult()

Write-Host "Total pages: $($doc.PageCount)"
$page = $doc.GetPage($PageNumber - 1)

$ms = [Windows.Storage.Streams.InMemoryRandomAccessStream,Windows.Storage.Streams,ContentType=WindowsRuntime]::new()
$opt = [Windows.Data.Pdf.PdfPageRenderOptions,Windows.Data.Pdf,ContentType=WindowsRuntime]::new()
$opt.DestinationWidth = [uint32]2500
$page.RenderToStreamAsync($ms, $opt).GetAwaiter().GetResult()

$reader = [System.IO.WindowsRuntimeStreamExtensions]::AsStreamForRead($ms)
$bytes = New-Object byte[] $ms.Size
$reader.Position = 0
$reader.Read($bytes, 0, $bytes.Length)
[System.IO.File]::WriteAllBytes($outPng, $bytes)
Write-Host "Saved: $outPng ($($bytes.Length) bytes)"
