$( document ).ready(function() {

// let students = document.getElementsByClassName('student-item');
//
// console.log(students);

let students = $('.student-item');
let pageClicked = 0;

// Functions for a "Meets Expectations" Grade:
// There are two main functions you'll need for this project:

// The showPage Function
// This function builds a list of ten students and displays it on the page. The students displayed depends on the page number passed to this function. The function should loop through all the students in the list and determine if each student is on this page. It will show all the students on this page and hide the rest. Here are some ideas for how this could work in code:

/* arguments here for page number and student list */
function showPage(pageClicked, active) {
  // first hide all students on the page
  students.hide();
  let min = pageClicked * 10;
  // console.log(min);
  let max = (pageClicked * 10) + 9;
  // console.log(max);
  //Then loop through all students in our student list argument
  for (let i = 0; i<students.length; i++) {
    // if student should be on this page number
    if (i >= min && i <= max) {
      // show the student
      $(students[i]).show();
    }
  }
}
showPage(pageClicked);


// The appendPageLinks Function
// This function creates all the page links based on a list of students. It will determine how many pages we need based on the list's length, create a list of links for each page, and append that list to the page. When each link is clicked, we'll use the showPage function to display the corresponding page, and mark the active link.

let paginationSection = $('.pagination');
let studentList = $('.student-list');

/* take a student list as an argument */
function appendPageLinks(students) {
  // console.log(students);
  // determine how many pages for this student list
const pages = Math.ceil(students.length / 10);
  // create a page link section
  let pageLinks = `<div class="pagination">
                    <ul>`;
  // “for” every page
  for (let i = 0; i < pages; i++) {
      // add a page link to the page link section
      if(i==0) {
        pageLinks += `<li><a class="active">${i + 1}</a></li>`
      } else {
      pageLinks += `<li><a>${i + 1}</a></li>`
      }
    }
  pageLinks += `</ul></div>`;
  // remove the old page link section from the site
  // append our new page link section to the site

  // define what happens when you click a link

      // Use the showPage function to display the page for the link clicked
      // mark that link as “active”

  //log the pageLinks structure
  // paginationSection.html(pageLinks);
  studentList.append(pageLinks);
}
appendPageLinks(students)


$('a').click(function() {
  $('a').removeClass();
  let pageClicked = $(this).text();
  pageClicked = parseInt(pageClicked) - 1;
  $(this).addClass('active');
  // paginationSection.html('');
  showPage(pageClicked);

  // console.log(pageClicked);
});




 });
