function saveTextAsFile() {
            // Get the content of the editable h1 element
            var title = document.querySelector('.banner h1').innerText.trim();
            if (title === '') {
               title = 'notes';
            }
            // Get the content of the editable element
            var content = document.getElementById('editable-content').innerText;

            // Create a Blob containing the text
            var blob = new Blob([content], { type: 'text/plain' });

            // Create an object URL for the Blob
            var url = URL.createObjectURL(blob);

            // Create a temporary anchor element
            var anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = title + '_' + generateTimestamp() + '.txt'; // Using h1 content as part of filename
            anchor.style.display = 'none';

            // Append the anchor to the body
            document.body.appendChild(anchor);

            // Trigger a click event on the anchor to initiate download
            anchor.click();

            // Remove the anchor from the body
            document.body.removeChild(anchor);

            // Revoke the object URL to free up resources
            URL.revokeObjectURL(url);
        }

        function generateTimestamp() {
            var now = new Date();
            var year = now.getFullYear();
            var month = ('0' + (now.getMonth() + 1)).slice(-2);
            var day = ('0' + now.getDate()).slice(-2);
            var hours = ('0' + now.getHours()).slice(-2);
            var minutes = ('0' + now.getMinutes()).slice(-2);
            var seconds = ('0' + now.getSeconds()).slice(-2);
            return year + month + day + '_' + hours + minutes + seconds;
        }