app.controller("myNotepadController", function($scope) {

    $scope.noteData = "";
    $scope.noteLength = function() {
        return $scope.noteData.length;
    };
    $scope.clear = function() {
        $scope.noteData = "";
    };
    $scope.save = function() {
        alert("Data Saved");
    };
});