// A company plans to open stores downtown in the
// city of Techlandia. Downtown Techlandia consists of city 
// blocks, represented as a grid of M*N
// blocks. Each block represents either building denoted by
// 1 or open land area denoted by 0.
// Adjacent blocks with value 1 are considered clusters of 
// buildings. Diagonal blocks with value 1 are not considered
// part of the same cluster. this company plans to have a store 
// in each cluster of buildings.

// Write an algorithm to find the number of stores that 
// this company can open in downtown Techlandia.
var mainGrid = [
    [1, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
    [1, 0, 1, 1],
    [1, 1, 1, 1],
];
//Get Direction of all 1
var ArrayX = new Array();
var z = 0;
for (var i = 0; i < mainGrid.length; i++) {
    var innerArrayLength = mainGrid[i].length;
    for (var j = 0; j < innerArrayLength; j++) {
        if (mainGrid[i][j] == 1) {
            ArrayX.push({ x: i, y: j });
        }
    }
}

var cluster = [];

for (let i = 0; i < ArrayX.length; i++) {
    findCluster(ArrayX[i])
}

console.log("Total number of clusters are : ", cluster.length)
cluster.forEach((cluster, i) => {
    console.log("Cluster ", i + 1, ": ", cluster)
});

function findCluster(area) {

    if (cluster.length === 0) {
        cluster = [...cluster, [area]];
        return
    }
    var flag = false;
    for (let i = 0; i < cluster.length; i++) {

        for (let j = 0; j < cluster[i].length; j++) {
            let temp = cluster[i][j];
            if (area.x === temp.x || area.y === temp.y) {

                if (Math.abs(area.x - temp.x) === 1 || Math.abs(area.y - temp.y) === 1) {
                    cluster[i] = [...cluster[i], area];
                    flag = true;
                    break;
                }
            }
        }
    }
    if (!flag) {
        cluster = [...cluster, [area]];
    }
}
