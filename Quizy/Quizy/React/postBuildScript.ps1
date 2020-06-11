if(Test-Path ./react){
    Remove-Item ./react -Recurse
}
Rename-Item ./build ./react

if(Test-Path ../wwwroot/react){
    Remove-Item ../wwwroot/react -Recurse
}
Move-Item ./react ../wwwroot