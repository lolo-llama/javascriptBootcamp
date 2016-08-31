//SEATING CHART PART 1:
//You are a teacher with n students (say 24 students or 25 students). 
//Write a function that draws an MxN (e.g., 4x6 or 5x5) seating chart. The seating chart order should be random. Clip names to a max length in order to make them fit.

//generate array with param studentArr: array containing students.

/**
 * This method returns an int of max length for unique student names
 * @param studentArr - array containing student names
 **/
function minimumChars(studentArr){
    var shortestUniqueLength = 1;
    var isCalculatingUniqueLength = true;
    
    while(isCalculatingUniqueLength){
        var isUniqueNames = true;
        for(var i = 0; i<studentArr.length; i++){
            var nameSubstring = studentArr[i].name.substring(0,shortestUniqueLength);
            for(var j=i+1; j<studentArr.length; j++){
                if(studentArr[j].name.includes(nameSubstring)){
                    isUniqueNames = false;
                    break;
                }
            }
            if(!isUniqueNames){
                break;
            }
        }
        if(isUniqueNames){
            isCalculatingUniqueLength = false;
            break;
        }
        shortestUniqueLength++;
    }
    
    return shortestUniqueLength;
}

/**
 * This method generates a MxN array and fills students consecutivesly
 * @param studentArr - array containing student objects
 * @param maxLength - number indicating string max length
 **/

function generateArray(studentArr, maxLength){
    var width, length;
    var childIndex = 0;
    
    if(n.length<2){
        throw Exception('no, fuck you budget does not have classroom small enough');
    }
    
    for(var i =3; i<10; i++){
        if(n.length%i == 0){
            //we have factors so generate 2d array
            width = n.lengthi;
            length = i;
        }
    }
    
    var classChart = new Array(width);
    
    for(var i=0; i<width; i++){
        classChart[i] = new Array(length);
        for(var j=0; j<length; j++){
            classChart[i][j] = n[childIndex].splice(0,maxLength);
            childIndex++;
        }
    }
    
    return classChart;
}

function draw(){
    
}

var testStudentArray = [{name:'jin'}, {name:'nathan'}, {name:'nate'}];

console.log(minimumChars(testStudentArray));

/**
 * ---------------------------
-------------------------------------------------------------------------------
SEATING CHART PART 2:
This is an extension of your earlier work on the "Seating chart" problem.

Augment your solution to track the ages of the students.  Make sure that students are seated such that younger students are closer to the front of the class (the "top" of the chart) and older students are closer to the back of the class.
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
SEATING CHART PART 3:
This is an extension of the "seating chart" problem.

Augment your solution such that we track a set of grades that each student has earned so far.  Arrange the students such that those with the worst average grade are closest to the front of the class (the "top" of the chart) and those with the best average grade are closest to the back of the class. 

Don't lose the ability to also arrange the seating by age, or randomly. Cleanly parameterize the choice among 3 seating arrangement strategies.
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
SEATING CHART PART 4:
This is an extension of the seating chart problem.

Given a seating chart, allow the caller to request a rotation of a row or the rotation of a column.  For example:

Joe Bob Karen
Fred Jill Horace
Gary Mary Harry

After rotating the first row, it would be:
Karen Joe Bob 
Fred Jill Horace
Gary Mary Harry

Then, after rotating the first column, it would be:
Gary Joe Bob 
Karen Jill Horace
Fred Mary Harry

Extension:
By default it rotates by 1 slot.   Allow rotating by any number of slots.
*/