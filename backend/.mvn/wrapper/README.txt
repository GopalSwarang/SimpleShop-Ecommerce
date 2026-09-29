The project intentionally uses a tiny bootstrap Maven wrapper instead of storing the Maven Wrapper JAR.

On Windows, run mvnw.cmd. It downloads Maven 3.9.11 into backend/.maven when needed.
On Linux/macOS, run ./mvnw. It does the same when curl/wget and unzip are available.

If your environment is offline, install Maven 3.9.11 (or another compatible 3.6.3+ release) manually.
