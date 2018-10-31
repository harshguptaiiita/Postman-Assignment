$(function(){
	var searchField=$('#query');
	var icon=$('#search-btn');
	$(searchField).on('focus',function(){
		$(this).animate({
			width:'100%'
		},400);
		$(icon).animate({
			right:'10px'
			
		},400);		
	});
	
	$(searchField).on('blur',function(){
		
		if(searchField.val()== ''){
			$(searchField).animate({
				width:'45%'
			},400,function(){});
			$(icon).animate({
				right:'201px'
				
			},400,function(){});	
		}
	});
	$('#search-form').submit(function(e){
		e.preventDefault();
	});
})

var ss;
function search(){
	$('#results').html('');
	$('#buttons').html('');
	
	q=$('#query').val();
	document.getElementById("list").value = "Choose";
	$.get(
		"https://www.googleapis.com/youtube/v3/search",{
			part: 'snippet, id',
			q: q,
			type:'video',
			key: 'AIzaSyCWxR7DFbnUONw0cZqUBoA69gcSq2xp6Rk'},
			function(data){
				var nextPageToken=data.nextPageToken;
				var prevPageToken=data.prevPageToken;
				console.log(data);
				ss=data;
				//console.log(ss);	
				if(data.items.length==0){
					$('#results').append('<li>' +'<center>'+'<div class="list-left">'+ 'No result Found'+ '</div></center></li>');
				}
				else{
				$.each(data.items,function(i,item){
					
					//var output=getOutput(item);
					
				var videoID=item.id.videoId;
				var title=item.snippet.title;
				var description=item.snippet.description;
				var thumb=item.snippet.thumbnails.high.url;
				var channelTitle=item.snippet.channelTitle;
				var videoDate=item.snippet.publishedAt;
				console.log(videoDate);
						var output='<li>' +
						'<div class="list-left">' +
						'<img src="'+thumb+'">' +
						'</div>' +
						'<div class="list-right">' +
						'<h3> <span class="tle">'+title+'</h3>' +
						'<small>By <span class="cTitle">'+channelTitle+'</span> on '+'</small>'+videoDate + 
						'<p>'+description+'</p>' +
						'</div>' +
						'</li>' + 
						'<div class="clearfix"></div>' + '<br /><br />'+'';
	
					//console.log(item.snippet.title);
					name[item.snippet.title]=output;		
					$('#results').append(output);
				}); 
				}
			 }
	);
}
function sortObject(o) {
    return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
}
function sortObje(o) {
   return Object.keys(o).sort().reverse().reduce((r, k) => (r[k] = o[k], r), {});
}
function myFunction(){
	console.log('hello');
	$('#results').html('');
	var sel=document.getElementById("list").value;
	console.log(sel);
	console.log(ss);

	if(sel=="Title"){
				var name={};
				var date={};
				if(ss.items.length==0){
					$('#results').append('<li>' +'<center>'+'<div class="list-left">'+ 'No result Found'+ '</div></center></li>');
				}
				else{
				$.each(ss.items,function(i,item){
					var videoID=item.id.videoId;
				var title=item.snippet.title;
				var description=item.snippet.description;
				var thumb=item.snippet.thumbnails.high.url;
				var channelTitle=item.snippet.channelTitle;
				var videoDate=item.snippet.publishedAt;
				console.log(videoDate);
						var output='<li>' +
						'<div class="list-left">' +
						'<img src="'+thumb+'">' +
						'</div>' +
						'<div class="list-right">' +
						'<h3>'+title+'</h3>' +
						'<small>By <span class="cTitle">'+channelTitle+'</span> on '+'</small>'+videoDate + 
						'<p>'+description+'</p>' +
						'</div>' +
						'</li>' + 
						'<div class="clearfix"></div>' + '<br /><br />'+'';
					name[item.snippet.title]=output;
					
					//$('#results').append(output);
				});
			}
			/*	for (var key in date) {
					console.log(key, date[key]);
					}*/
				name=sortObject(name);
					for (var key in name) {
					//console.log(key, name[key]);
						$('#results').append(name[key]);
					}
					
	}
	else if(sel=="Date"){
		
				var date={};
				if(ss.items.length==0){
					$('#results').append('<li>' +'<center>'+'<div class="list-left">'+ 'No result Found'+ '</div></center></li>');
				}
				else{
				$.each(ss.items,function(i,item){
					var videoID=item.id.videoId;
				var title=item.snippet.title;
				var description=item.snippet.description;
				var thumb=item.snippet.thumbnails.high.url;
				var channelTitle=item.snippet.channelTitle;
				var videoDate=item.snippet.publishedAt;
				console.log(videoDate);
						var output='<li>' +
						'<div class="list-left">' +
						'<img src="'+thumb+'">' +
						'</div>' +
						'<div class="list-right">' +
						'<h3>'+title+'</h3>' +
						'<small>By <span class="cTitle">'+channelTitle+'</span> on '+'</small>'+videoDate + 
						'<p>'+description+'</p>' +
						'</div>' +
						'</li>' + 
						'<div class="clearfix"></div>' + '<br /><br />'+'';
					//console.log(item.snippet.title);
					date[item.snippet.publishedAt]=output;
					
					//$('#results').append(output);
				}); 
				}
			/*	for (var key in date) {
					console.log(key, date[key]);
					}*/
				date=sortObje(date);
					for (var key in date) {
					//console.log(key, name[key]);
						$('#results').append(date[key]);
					}
		
	}
	else if(sel=="Default")
	{
		if(ss.items.length==0){
					$('#results').append('<li>' +'<center>'+'<div class="list-left">'+ 'No result Found'+ '</div></center></li>');
				}
				else{
				$.each(ss.items,function(i,item){
					
					//var output=getOutput(item);
					
				var videoID=item.id.videoId;
				var title=item.snippet.title;
				var description=item.snippet.description;
				var thumb=item.snippet.thumbnails.high.url;
				var channelTitle=item.snippet.channelTitle;
				var videoDate=item.snippet.publishedAt;
				console.log(videoDate);
						var output='<li>' +'<div class="list-left">' +'<img src="'+thumb+'">' +
									'</div>' +
									'<div class="list-right">' +
									'<h3>'+title+'</h3>' +
									'<small>By <span class="cTitle">'+channelTitle+'</span> on '+'</small>'+videoDate + 
									'<p>'+description+'</p>' +
									'</div>' +
									'</li>' + 
									'<div class="clearfix"></div>' + '<br /><br />'+'';
	
					//console.log(item.snippet.title);
					//name[item.snippet.title]=output;		
					$('#results').append(output);
				}); 
				}
		
	}
	
	
}
