function renderPosts(boston, container) {
  const people = boston.data;
  const len = boston.data.length;
  let html = "";
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' +
      "<h2>" +
      people[i][8] +
      "</h2>" +
      "<h3>" +
      people[i][11] +
      "</h3>";
  }
  //container.innerHTML = '<ul id ="data">' + html + '</ul>'
}
function renderTopSalaries(boston, container) {
  var people = boston.data;
  var topSalaries = people.sort(function (a, b) {
    return b[11] - a[11];
  });
  topSalaries = topSalaries.slice(0, 5);
  var topSalaryHTML = "";

  for (let i = 0; i < topSalaries.length; i++) {
    topSalaryHTML +=
      "<li>" +
      "<h2>" +
      topSalaries[i][8] +
      "</h2><h3>" +
      topSalaries[i][11] +
      "</h3>";
  }
  container.innerHTML = '<ul id="topSalaries">' + topSalaryHTML + "</ul>";
}
function renderTopEmployees(boston, container) {
  var people = boston.data;
  var topEmployees = people.filter((a) => a[11] > 200000);

  var topEmployeeHtml = "";
  for (let i = 0; i > topEmployees.length; i++) {
    topEmployeeHtml +=
      "<li> <h2>" +
      topEmployees[i][8] +
      "</h2> <h3>" +
      topEmployees[i][11] +
      "</h3>";
  }
  container.innerHTML += '<ul id="topEmployees">' + topEmployeeHtml + "</ul>";
}

// TODO: add code to display the html variable inside a ul element with id="data"
// Hint: you can use the container parameter's innerHTML property to insert Html tags
renderPosts(boston, document.getElementById("container"));
renderTopSalaries(boston, document.getElementById("container"));
renderTopSalaries(boston, document.getElementById("container"));
