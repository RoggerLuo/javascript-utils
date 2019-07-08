function downloadFile(url, fileName, success, fail, progress) {
    cordova.exec(function (path) {
            let fileTransfer = new FileTransfer();
            let uri = encodeURI(url)

            fileTransfer.onprogress = function(progressEvent) {
                console.log(progressEvent)
                if (progressEvent.lengthComputable) {
                    console.log(progressEvent.loaded / progressEvent.total)
                    progress(progressEvent.loaded / progressEvent.total);
                }
            };

            fileTransfer.download(
                uri,
                path + '/' + fileName,
                function (entry) {
                    console.log("download complete: " + entry.fullPath);
                    alert(entry.fullPath)
                    success();
                },
                function (error) {
                    fail();
                    console.log("download error source " + error.source);
                    console.log("download error target " + error.target);
                    console.log("upload error code" + error.code);
                },
                false
            );
        },
        function (error) {
            fail();
        },
        "WorkPlus_Files",
        "getUserFilePath",
        [{"system": "file"}]);
}