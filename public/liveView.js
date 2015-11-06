		    
		      <div>
		      <div id="user-list" class="row">
		            <div class="col-sm-4" ng-controller="mainController">
		                <!-- LOOP OVER THE users IN $scope.USERS -->
		                <div class="checkbox" ng-repeat="user in users">
		                    <label>
		                        <input type="checkbox" ng-click="deleteUser(user._id)"> {{ user.local.email }}
		                    </label>
		                </div>
		            </div>
		        </div>
		      </div>
		    