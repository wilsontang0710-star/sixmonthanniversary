SIX MONTH ANNIVERSARY — GITHUB PAGES

Files:
- index.html = the page
- style.css = design
- script.js = interactions + countdown

PHOTOS:
1. Create a folder named "images" in the repository.
2. Upload your photos there.
3. In index.html, replace a placeholder like:
   <div class="placeholder">PHOTO 01</div>
   with:
   <img src="images/photo1.jpg" alt="Our memory">
4. Add this CSS if you want the images to look like the placeholders:
   .photo-card img { width:100%; min-height:260px; object-fit:cover; display:block; }

MUSIC:
1. Add an MP3 named music.mp3 to the root of the repository.
2. The music button will play it after the visitor taps the button.
3. Browsers normally block automatic audio, so the click is intentional.

MEETING COUNTDOWN:
Open script.js and change:
const MEETING_DATE = "2027-03-25T12:00:00+08:00";
Use your real date/time.

SPOTIFY / YOUTUBE:
Open index.html and replace the example links in the song section with your actual song URLs.

LETTER:
Edit the text inside the "letter-paper" section in index.html.

GITHUB PAGES:
Repository > Settings > Pages
Source: Deploy from a branch
Branch: main
Folder: / (root)
Save

IMPORTANT:
The repository is public, so anything placed in it can potentially be viewed by others. Do not put passwords, private IDs, or sensitive information in the files.
