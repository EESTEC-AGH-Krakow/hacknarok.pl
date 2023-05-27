param(
    [Parameter(Mandatory=$true)]
    [string]$Image,
    [Parameter(Mandatory=$true)]
    [string]$Scale
)

$img = Get-Item $Image

ffmpeg -i $img.FullName -vf scale="iw/$($Scale):ih/$Scale" ./$($img.BaseName)_thumb_$Scale$($img.Extension)