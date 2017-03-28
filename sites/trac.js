


//console.log(1);
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

//setTimeout(function() {
	/*$("#field-summary").focus();
	var title = $("#field-summary").val();
	if (title.indexOf("[FY1") == 0) {
		title = title.replaceAt(4, "6").replaceAt(6, "4");
	} else {
		title = "[FY16Q4]"+ title;
	}
	$("#field-summary").val(title).change();
*/
	$("#action_leave_reassign_owner").focus().val($('#ticket table tbody  td[headers=h_owner] a').html()).change();
//}, 300);


 
