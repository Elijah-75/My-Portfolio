const resumeInput = document.getElementById('resumeInput');
const fileInfo = document.getElementById('fileInfo');
const resumeLink = document.getElementById('resumeLink');

resumeInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (!file) {
    fileInfo.textContent = 'No file selected.';
    resumeLink.textContent = 'Download Resume';
    resumeLink.href = 'resume.pdf';
    return;
  }

  fileInfo.textContent = `Selected file: ${file.name}`;
  resumeLink.textContent = 'Open Resume';
  const fileURL = URL.createObjectURL(file);
  resumeLink.href = fileURL;
  resumeLink.target = '_blank';
});
