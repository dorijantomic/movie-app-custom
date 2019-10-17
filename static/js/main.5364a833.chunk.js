(this["webpackJsonpmovie-app-2"]=this["webpackJsonpmovie-app-2"]||[]).push([[0],{26:function(e,t,n){e.exports=n(43)},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),c=n.n(r),i=(n(31),n(8)),s=n(9),l=n(11),u=n(10),m=n(12),f=(n(32),n(15)),d=n(6),g=n(24),p=(n(33),n(34),function(e){var t=e.moviesList;return o.a.createElement(a.Fragment,null,null!==t?t.map((function(e,t){return o.a.createElement("div",{className:"card-container",key:e.id+t},o.a.createElement(f.b,{to:"/".concat(e.id)},o.a.createElement("div",{className:"card-container__rating"},o.a.createElement("span",null,e.vote_average)),o.a.createElement("div",{className:"card-container__img"},e.backdrop_path&&500!==e.backdrop_path.status?o.a.createElement("img",{onError:function(e){return e.target.src="https://i.imgur.com/U69zau9.jpg"},src:"https://image.tmdb.org/t/p/w500/".concat(e.backdrop_path," "),alt:"",srcset:""}):o.a.createElement("img",{src:"https://i.imgur.com/U69zau9.jpg",alt:"",srcset:""})),o.a.createElement("div",{className:"card-container__text"},o.a.createElement("h1",null,e.title," (",e.release_date.slice(0,4),")"),o.a.createElement("p",null,"Language: ",e.original_language))))})):o.a.createElement("h1",null,"Loading..."))}),v=(n(40),function(e){var t=e.toggleModal,n=e.loadMoreMovies;return o.a.createElement("div",{className:"button-group"},o.a.createElement("span",null),o.a.createElement("button",{className:"button-group--modal",onClick:function(){return n()}},o.a.createElement("p",null,"Load")),o.a.createElement("button",{className:"button-group--load",onClick:function(){return t()}},o.a.createElement("i",{className:"material-icons"},"shuffle")))}),h=(n(41),n(45)),E=function(e){var t=e.showModal,n=e.toggleModal,a=e.fetchMoviesByGenre;return o.a.createElement(h.a,{timeout:1e3,in:t,unmountOnExit:!0,classNames:"modal-container"},o.a.createElement("div",{className:"modal-container",onClick:function(e){n()}},o.a.createElement("div",{className:"modal",onClick:function(e){return e.stopPropagation()}}," ",o.a.createElement("div",{className:"modal__heading"},o.a.createElement("h1",null,"Select Genre")),o.a.createElement("div",{className:"modal__buttons"},o.a.createElement("button",{onClick:function(e){return a(e.target.textContent.toLocaleLowerCase())}},"Action"),o.a.createElement("button",{onClick:function(e){return a(e.target.textContent.toLocaleLowerCase())}},"Adventure"),o.a.createElement("button",{onClick:function(e){return a(e.target.textContent.toLocaleLowerCase())}},"Comedy"),o.a.createElement("button",{onClick:function(e){return a(e.target.textContent.toLocaleLowerCase())}},"Crime"),o.a.createElement("button",{onClick:function(e){return a(e.target.textContent.toLocaleLowerCase())}},"Drama"),o.a.createElement("button",{onClick:function(e){return a(e.target.textContent.toLocaleLowerCase())}},"Fantasy"),o.a.createElement("button",{onClick:function(e){return a(e.target.textContent.toLocaleLowerCase())}},"Horror"),o.a.createElement("button",{onClick:function(e){return a(e.target.textContent.toLocaleLowerCase())}},"Mystery"),o.a.createElement("button",{onClick:function(e){return a(e.target.textContent.toLocaleLowerCase())}},"Romance"),o.a.createElement("button",{onClick:function(e){return a(e.target.textContent.toLocaleLowerCase())}},"Sci-fi"),o.a.createElement("button",{onClick:function(e){return a(e.target.textContent.toLocaleLowerCase())}},"Thriller"),o.a.createElement("button",{onClick:function(e){return a(e.target.textContent.toLocaleLowerCase())}},"Western")))))},b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={movies:null,showModal:!1,guest_session_id:null,page:1,genre:null,allGenre:{action:28,adventure:12,comedy:35,crime:80,drama:18,fantasy:14,horror:27,mystery:9648,romance:10749,"sci-fi":878,thriller:53,western:37}},n.toggleModal=function(){n.setState((function(e){return{showModal:!e.showModal}}))},n.loadMoreMovies=function(){var e=n.state.genre,t=n.state.page,a="https://api.themoviedb.org/3/movie/popular?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US&page=".concat(t+1),o="https://api.themoviedb.org/3/discover/movie?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=".concat(Math.floor(499*Math.random()+1),"&with_genres=").concat(e);fetch(n.state.genre?o:a).then((function(e){if(200===e.status)return e.json();console.log("Oh no, it appears that the Fire village is under attack by ".concat(e.status," soldiers"))})).then((function(e){var t=Object(g.a)(n.state.movies).concat(e.results);n.setState((function(e){return{page:e.page+1,movies:t}}))})).catch((function(e){return console.log(["ERROR"],e)}))},n.fetchMoviesByGenre=function(e){var t=n.state.allGenre;n.toggleModal(),fetch("https://api.themoviedb.org/3/discover/movie?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=".concat(499*Math.random()+1,"&with_genres=").concat(n.state.allGenre[e])).then((function(e){return e.json()})).then((function(a){n.setState({movies:a.results,genre:t[e]})})).catch((function(e){return console.log(["ERROR"],e)}))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.themoviedb.org/3/movie/popular?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US&page=1").then((function(e){if(200===e.status)return e.json();console.log("Oh no, it appears that the Leaf village is under attack by ".concat(e.status," soldiers"))})).then((function(t){e.setState({movies:t.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return o.a.createElement(a.Fragment,null,o.a.createElement(E,{fetchMoviesByGenre:this.fetchMoviesByGenre,showModal:this.state.showModal,toggleModal:this.toggleModal}),o.a.createElement("div",{className:"movie-list"},o.a.createElement(p,{moviesList:this.state.movies})),o.a.createElement("div",{className:"buttons-container"},o.a.createElement(v,{toggleModal:this.toggleModal,loadMoreMovies:this.loadMoreMovies})))}}]),t}(a.Component),C=(n(42),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={id:0,movie:null,rating:0,guestSessionId:null,ratedMovies:null},n.calculateRating=function(e){var t=e/10*100,a="".concat(5*Math.round(t/5));n.setState({rating:a})},n.rateMovie=function(e){fetch("https://api.themoviedb.org/3/movie/".concat(n.state.id,"/rating?guest_session_id=").concat(n.props.guestSessionId,"&api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3"),{method:"POST",body:JSON.stringify({value:e}),headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){return n.fetchRatedMovies(n.props.guestSessionId)}))},n.fetchRatedMovies=function(e){setTimeout((function(){fetch("\n        https://api.themoviedb.org/3/guest_session/9b71f492d24e6f0bac0b3a698b4ebba9/rated/movies?sort_by=created_at.asc&language=en-US&api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3").then((function(e){return e.json()})).then((function(e){console.log(e),n.setState({ratedMovies:e.results})})).catch((function(e){return console.log(e,"failed to fetch rated movies")}))}),1e3)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.themoviedb.org/3/movie/".concat(window.location.href.match(/\d+/g).map(Number)[1],"?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US")).then((function(e){return e.json()})).then((function(t){console.log(t),e.calculateRating(t.vote_average),e.setState({movie:t,id:t.id},(function(){e.fetchRatedMovies(e.props.guestSessionId)}))}))}},{key:"render",value:function(){var e=this;if(this.state.movie){var t=this.state,n=t.movie,a=t.id,r=null;return this.state.ratedMovies&&(r=this.state.ratedMovies.filter((function(e,t){return e.id===a}))||null),console.log(r),o.a.createElement("div",{className:"movie-details-container"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card__img"},o.a.createElement("img",{src:"https://image.tmdb.org/t/p/original/".concat(n.backdrop_path," "),alt:"",srcset:""}),o.a.createElement("p",null,n.overview)),o.a.createElement("div",{className:"card__info"},o.a.createElement("ul",null,o.a.createElement("li",null," ",n.vote_average),o.a.createElement("li",null,o.a.createElement("div",{className:"stars-outer"},o.a.createElement("i",{className:"material-icons"},o.a.createElement("span",{onClick:function(){return e.rateMovie(1)}},"star")," ",o.a.createElement("span",{onClick:function(){return e.rateMovie(2)}},"star")," ",o.a.createElement("span",{onClick:function(){return e.rateMovie(3)}},"star")," ",o.a.createElement("span",{onClick:function(){return e.rateMovie(4)}},"star")," ",o.a.createElement("span",{onClick:function(){return e.rateMovie(5)}},"star")," ",o.a.createElement("span",{onClick:function(){return e.rateMovie(6)}},"star")," ",o.a.createElement("span",{onClick:function(){return e.rateMovie(7)}},"star")," ",o.a.createElement("span",{onClick:function(){return e.rateMovie(8)}},"star")," ",o.a.createElement("span",{onClick:function(){return e.rateMovie(9)}},"star")," ",o.a.createElement("span",{onClick:function(){return e.rateMovie(10)}},"star")),o.a.createElement("div",{className:"stars-inner",style:{width:"".concat(this.state.rating,"%")}},o.a.createElement("i",{className:"material-icons"},o.a.createElement("span",{onClick:function(){return e.rateMovie(1)}},"star")," ",o.a.createElement("span",{onClick:function(){return e.rateMovie(2)}},"star")," ",o.a.createElement("span",{onClick:function(){return e.rateMovie(3)}},"star")," ",o.a.createElement("span",{onClick:function(){return e.rateMovie(4)}},"star")," ",o.a.createElement("span",{onClick:function(){return e.rateMovie(5)}},"star")," ",o.a.createElement("span",{onClick:function(){return e.rateMovie(6)}},"star")," ",o.a.createElement("span",{onClick:function(){return e.rateMovie(7)}},"star")," ",o.a.createElement("span",{onClick:function(){return e.rateMovie(8)}},"star")," ",o.a.createElement("span",{onClick:function(){return e.rateMovie(9)}},"star")," ",o.a.createElement("span",{onClick:function(){return e.rateMovie(10)}},"star"))))),o.a.createElement("li",null,n.popularity," "),o.a.createElement("li",null,n.original_language),o.a.createElement("li",null,n.production_companies.map((function(e,t){return void 0!==n.production_companies[++t]?e.name+", ":"and "+e.name})))))))}return o.a.createElement("h1",null,"Loading...")}}]),t}(a.Component)),k=n(16),M=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={guestSessionId:null},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.props.cookies.get("guestSessionId"))this.setState({guestSessionId:this.props.cookies.get("guestSessionId")});else{var t=this.props.cookies;fetch("https://api.themoviedb.org/3/authentication/guest_session/new?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3").then((function(e){return e.json()})).then((function(n){t.set("guestSessionId",n.guest_session_id,{path:"/",expires:new Date((new Date).getTime()+864e5)}),e.setState({guestSessionId:n.guest_session_id})}))}}},{key:"render",value:function(){var e=this;return o.a.createElement(f.a,{basename:"movie-app-custom"},o.a.createElement(d.c,null,o.a.createElement(d.a,{path:"/",exact:!0,component:b}),o.a.createElement(d.a,{path:"/:movie",exact:!0,render:function(){return o.a.createElement(C,{guestSessionId:e.state.guestSessionId})}})))}}]),t}(a.Component),_=Object(k.b)(M);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(k.a,null,o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.5364a833.chunk.js.map