const languages = [
  { name: 'Albanian', file: 'cinderella-1950-albanian' },
  { name: 'Arabic', file: 'cinderella-1950-arabic' },
  { name: 'Bengali', file: 'cinderella-1950-bengali' },
  { name: 'Bulgarian', file: 'cinderella-1950-bulgarian' },
  { name: 'Cantonese', file: 'cinderella-1950-cantonese' },
  { name: 'Croatian', file: 'cinderella-1950-croatian' },
  { name: 'Czech', file: 'cinderella-1950-czech' },
  { name: 'Danish', file: 'cinderella-1950-danish' },
  { name: 'Dutch', file: 'cinderella-1950-dutch' },
  { name: 'Finnish', file: 'cinderella-1950-finnish' },
  { name: 'French', file: 'cinderella-1950-french' },
  { name: 'German', file: 'cinderella-1950-german' },
  { name: 'Greek', file: 'cinderella-1950-greek' },
  { name: 'Hebrew', file: 'cinderella-1950-hebrew' },
  { name: 'Hindi', file: 'cinderella-1950-hindi' },
  { name: 'Hmong', file: 'cinderella-1950-hmong' },
  { name: 'Hungarian', file: 'cinderella-1950-hungarian' },
  { name: 'Icelandic', file: 'cinderella-1950-icelandic' },
  { name: 'Indonesian', file: 'cinderella-1950-indonesian' },
  { name: 'Italian', file: 'cinderella-1950-italian' },
  { name: 'Japanese', file: 'cinderella-1950-japanese' },
  { name: 'Kazakh', file: 'cinderella-1950-kazakh' },
  { name: 'Khmer', file: 'cinderella-1950-khmer' },
  { name: 'Korean', file: 'cinderella-1950-korean' },
  { name: 'Kurdish', file: 'cinderella-1950-kurdish' },
  { name: 'Malay', file: 'cinderella-1950-malay' },
  { name: 'Mandarin Chinese', file: 'cinderella-1950-mandarin-chinese' },
  { name: 'Mizo', file: 'cinderella-1950-mizo' },
  { name: 'Norwegian', file: 'cinderella-1950-norwegian' },
  { name: 'Persian', file: 'cinderella-1950-persian' },
  { name: 'Polish', file: 'cinderella-1950-polish' },
  { name: 'Portuguese', file: 'cinderella-1950-portuguese' },
  { name: 'Romanian', file: 'cinderella-1950-romanian' },
  { name: 'Russian', file: 'cinderella-1950-russian' },
  { name: 'Serbian', file: 'cinderella-1950-serbian' },
  { name: 'Slovak', file: 'cinderella-1950-slovak' },
  { name: 'Spanish', file: 'cinderella-1950-spanish' },
  { name: 'Swedish', file: 'cinderella-1950-swedish' },
  { name: 'Tamil', file: 'cinderella-1950-tamil' },
  { name: 'Teochew', file: 'cinderella-1950-teochew' },
  { name: 'Thai', file: 'cinderella-1950-thai' },
  { name: 'Turkish', file: 'cinderella-1950-turkish' },
  { name: 'Ukrainian', file: 'cinderella-1950-ukrainian' },
  { name: 'Uyghur', file: 'cinderella-1950-uyghur' },
  { name: 'Vietnamese', file: 'cinderella-1950-vietnamese' },
];

const baseUrl = 'https://skylerdufour429.github.io/cinderella-dub-collection/media';
const languageSelect = document.getElementById('language-select');
const moviePlayer = document.getElementById('movie-player');
const downloadLink = document.getElementById('download-link');
const downloadGrid = document.getElementById('download-grid');

function buildLanguageOptions() {
  languageSelect.innerHTML = languages
    .map(
      (language) =>
        `<option value="${language.file}">${language.name}</option>`
    )
    .join('');
}

function getLanguageByFile(file) {
  return languages.find((language) => language.file === file) || languages[0];
}

function setLanguage(file) {
  const language = getLanguageByFile(file);
  const mediaUrl = `${baseUrl}/${language.file}.mp4`;

  moviePlayer.src = mediaUrl;
  moviePlayer.load();
  languageSelect.value = language.file;
  downloadLink.href = mediaUrl;
  downloadLink.textContent = `Download ${language.name} MP4`;
  downloadLink.setAttribute('download', `${language.file}.mp4`);
}

function buildDownloadGrid() {
  downloadGrid.innerHTML = languages
    .map(
      (language) => `
        <article class="language-card">
          <h3 class="language-name">${language.name}</h3>
          <a
            class="language-link"
            href="${baseUrl}/${language.file}.mp4"
            target="_blank"
            rel="noreferrer"
          >
            MP4 Download
          </a>
        </article>
      `
    )
    .join('');
}

buildLanguageOptions();
buildDownloadGrid();
setLanguage(languages[0].file);

languageSelect.addEventListener('change', (event) => {
  setLanguage(event.target.value);
});
