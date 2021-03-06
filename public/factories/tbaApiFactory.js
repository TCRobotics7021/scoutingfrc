app.factory('tbaApi', ['$http', function($http){
		var baseUrl = 'https://www.thebluealliance.com/api/v3/';
		var apiKey = '?X-TBA-Auth-Key=sLym63lk04kq6G9IwWsvzNxrSl7DYNoyH09RRHfj7trmskoWE8bTrVTjQ8nByZ8Z';
		var tbaApi = {};

		tbaApi.getTeam = function(team) {
			teamKey = 'frc' + team;
			return $http.get(baseUrl + '/team/' + teamKey + apiKey);
		};
		
		tbaApi.getTeamSimple = function(team){
			teamKey = 'frc' + team;
			return $http.get(baseUrl + '/team/' + teamKey + '/simple' + apiKey);
		};

		tbaApi.getEventTeams = function(eventKey){
			return $http.get(baseUrl + '/event/' + eventKey + '/teams/keys' + apiKey); 
		};

		tbaApi.getTeamEvents = function(team, year){
			teamKey = 'frc' + team;
			return $http.get(baseUrl + '/team/' + teamKey + '/events/' + 2018 + apiKey);
			//Hard-coded year for time being
		};

		tbaApi.getEventMatches = function(eventKey){
			return $http.get(baseUrl + '/event/' + eventKey + '/matches' + apiKey);
		};
		
	return tbaApi;
}]);