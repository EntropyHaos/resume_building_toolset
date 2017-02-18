/*global num_of_cards*/
/*global num_of_card_types*/
/*global resume_info_object*/

var dBug = false;
var append_div = "traditional_content";
function init(){
    if (dBug) console_display_stats();
    if (dBug) console_display_resume_info();
    append_resume_info_to_page();
}

function console_display_stats(){
    console.log("num_of_cards : " + num_of_cards);
    console.log("num_of_card_types : " + num_of_card_types);
}

function append_resume_info_to_page(){
    //var num_sections = 0;
    var div_html;
    div_html = "";
    div_html += "<table id=\"traditional_content_table\">";
    for (var section in resume_info_object) {
        //num_sections++;
        //console.log("SECTION #" + num_sections + " : " + section + " (" + resume_info_object[section].length + " cards)\n");
        div_html += "<tr class=\"section_row\">";
        div_html += "<td class=\"section_type_cell\">";
        div_html += "<b>" + section + "</b>";
        div_html += "</td>";
        var j;
        div_html += "<td class=\"section_data_cell\">";
        for (j = 0; j <  resume_info_object[section].length; j++){
            div_html += "<div class=\"resume_info_object_div\">" + get_append_text_from_object(resume_info_object[section][j]) + "</div>";  
            //console.log("CARD " + (j+1) + ":\n");
            //console_display_object(resume_info_object[section][j]);
        }
        div_html += "</td>";
        div_html += "</tr>";
    }
    div_html += "</table>";
    document.getElementById(append_div).innerHTML = div_html;
}

function get_append_text_from_object(object_to_stringify){
    var return_string;
    var content_string;
    
    return_string = "";
    content_string = "";
    for (var property in object_to_stringify) {
      if (property === "duration"){
        return_string = "<i>" + object_to_stringify[property] + "</i> " + return_string;
      } else if (property === "heading"){
        return_string += "<b>" + object_to_stringify[property] + " - </b> ";
      } else if (property === "subheading"){
        return_string += "<span>" + object_to_stringify[property] + "</span> ";
      } else if (property === "display_content"){
        content_string = "<div class=\"object_content_text\">" + object_to_stringify[property] + "</div>";
      }
    } 
    return_string += content_string;
    return_string += "<br>";
    //console.log("" + output);
    return return_string;
}

function console_display_resume_info(){
    var num_sections = 0;
    for (var section in resume_info_object) {
        num_sections++;
        console.log("SECTION #" + num_sections + " : " + section + " (" + resume_info_object[section].length + " cards)\n");
        var j;
        for (j = 0; j <  resume_info_object[section].length; j++){
            console.log("CARD " + (j+1) + ":\n");
            console_display_object(resume_info_object[section][j]);
        }
    }
}

function console_display_object(object_to_display){
    var output = '';
    for (var property in object_to_display) {
      output += property + ': ' + object_to_display[property]+'; ' +"\n";
    }
    console.log("" + output);
}

init();