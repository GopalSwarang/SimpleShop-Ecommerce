@echo off
setlocal EnableExtensions
set "BASE=%~dp0"
set "MAVEN_VERSION=3.9.11"
set "MAVEN_HOME=%BASE%.maven\apache-maven-%MAVEN_VERSION%"
set "MAVEN_ZIP=%BASE%.maven\apache-maven-%MAVEN_VERSION%-bin.zip"

if not exist "%MAVEN_HOME%\bin\mvn.cmd" (
  echo Maven is not installed locally. Bootstrapping Maven %MAVEN_VERSION%...
  if not exist "%BASE%.maven" mkdir "%BASE%.maven"
  powershell -NoProfile -ExecutionPolicy Bypass -Command "Invoke-WebRequest -UseBasicParsing 'https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/%MAVEN_VERSION%/apache-maven-%MAVEN_VERSION%-bin.zip' -OutFile '%MAVEN_ZIP%'"
  if errorlevel 1 (
    echo Could not download Maven. Install Maven manually or connect to the internet and run this command again.
    exit /b 1
  )
  powershell -NoProfile -ExecutionPolicy Bypass -Command "Expand-Archive -Path '%MAVEN_ZIP%' -DestinationPath '%BASE%.maven' -Force"
  if errorlevel 1 exit /b 1
)

call "%MAVEN_HOME%\bin\mvn.cmd" %*
endlocal
