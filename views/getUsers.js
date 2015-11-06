<div class="col-sm-6" style="width: 100%">klgl</div>
			<div class="col-sm-6" style="width: 100%">klgl</div>
			<div class="well">
				<h3><span class="fa fa-user"></span> Local</h3>
				<p>
					<strong>id</strong>: <%= user._id %><br>
					<strong>email</strong>: <%= user.local.email %><br>
					<strong>password</strong>: <%= user.local.password %>
				</p>		
			</div>	
			<Script>
				console.Log(<%= user.local.email %>);
			</Script>