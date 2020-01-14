<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">

		<title></title>

		<style type="text/css">
		</style>

	</head>
	<body>
		<div>
			<img src="https://media.sproutsocial.com/uploads/2017/11/Social-Media-Ideas.png">
		</div>
		<script type="text/javascript">
			/*form verification*/
			//let formChanged = false;
			//myForm.addEventListener('change', () => formChanged = true);
			/*form verification*/

			window.addEventListener('beforeunload', (event) => {
				//if (formChanged) {
					event.returnValue = `Are you sure you want to leave?`;
				//}
			});

		</script>
	</body>
</html>
