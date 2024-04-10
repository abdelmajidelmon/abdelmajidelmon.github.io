var names=new Array();
names[0]="majid";
names[1]="Jomalekhn";
names[2]="ten";
names[3]="james";
names[4]="fake";
names[5]="son";
names[6]="foden";
names[7]="jasmin";
names[8]="mark";
names[9]="sonhungmin";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}