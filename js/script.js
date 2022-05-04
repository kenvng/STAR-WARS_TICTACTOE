

const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})


// $('#audio-control').click(function () {
//   if ($("#myVideo").prop('muted')) {
//     $("#myVideo").prop('muted', false);
//     $(this).text('Mute');
//     // or toggle class, style it with a volume icon sprite, change background-position
//   } else {
//     $("#myVideo").prop('muted', true);
//     $(this).text('Unmute');
//   }
// });

// document.querySelector('#audio-control').click(function () {
//   if (document.querySelector("#myVideo").prop('muted')) {
//     document.querySelector("#myVideo").prop('muted', false);
//     document.querySelector(this).text('Mute');
//     // or toggle class, style it with a volume icon sprite, change background-position
//   } else {
//     document.querySelector("#myVideo").prop('muted', true);
//     document.querySelector(this).text('Unmute');
//   }
// });