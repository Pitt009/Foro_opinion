var topicId = getParameterByName('topic_id');

var api = {
  url: "http://examen-laboratoria-sprint-5.herokuapp.com/topics"
};

//Solo por propositos de debug
if(topicId){
  alert("El topic ID es:"+topicId);
}
