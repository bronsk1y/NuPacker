document.getElementById('install-button').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = '../resourses/NuPackerSetup.exe';
    link.download = 'NuPackerSetup.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });