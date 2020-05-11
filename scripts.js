/**********************
 * Copies Font Import *
 **********************/

function copyImport(fontName) {
    let fontNameClass = `.${fontName}-import`;
    let fontNameX = $(`li.${fontName} h1`).text();
    let fontImport = $(fontNameClass).text();
    let dummyInput = $(`<input type="text" id="dummyInput">`);
    $(dummyInput).val(fontImport);

    $("body").append(dummyInput)
    dummyInput.select();

    document.execCommand('copy');

    $("#dummyInput").remove();

    alert(`${fontNameX} - Import code copied`);
}

/*************
 * Demo Text *
 *************/
function demoText() {
    let demoTextA = $("#demoText").val();
    if (demoTextA == null || demoTextA == "") {
        $("span.demo").text("Demo Text");
    } else {
        $("span.demo").text(demoTextA);
    }
    
}

/**************
 * Search Bar *
 **************/
function fontSearch() {
    // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchFont');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


