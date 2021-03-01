### UPDATE gh-pages
github deploy로 배포


### UPDATE ver05
#### 2020년 12월 13일 ~ 2020년 12월 18일: Vuex(VueJS 상태 관리 프로그램 활용)

##### 1. state 속성 적용
1. state: 여러 컴포넌트에 공유 되는 data
2. created method와 todoItem 배열을 state로 보내서 중간에 props로 내려주지 않아도 하위 컴포넌트가 가져다 쓸 수 있도록 리팩토링함

##### 2. mutations 적용
1. state 값을 변경하는 이벤트 로직, 메서드: methods

        
---
### UPDATE ver04
#### 2020년 12월 11일 ~ 2020년 12월 13일

##### 1. ES5 -> ES6
1. babel을 통해서 이 부분을 바꿔주는 작업을 해주고 있음. webpack.config.js 파일에 babel-loader 
2.  
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
        
        
---
### UPDATE ver03
#### 2020년 12월 4일 ~ 2020년 12월 8일: userexp branch에서 작업 후 ver03에 병합

##### 1. 사용자 기능 개선: 앱 플로우 
1. default modal의 디자인, 사용성 개선
2. modal과 같이 서비스 전반에 사용되는 컴포넌트들을 관리할 Common 폴더를 만듦
3. slot: 뷰의 기능 중 하나, 슬롯을 이용해서 특정 부분을 재정의할 수 있다. 특히 html 안쪽 부분. 특정 컴포넌트의 일부 ui를 재사용할 수 있음.

##### 2. 사용자 경험 개선: 할 일 삭제, 업로드시 transition 이미지 부여
1. Transition Effect: 할 일 업데이트 시 자연스럽게 아래에서 위로 올라오는 효과를 transition-group을 이용해서 구현



---
### UPDATE ver02
##### 2020년 12월 3일: dev02로부터 merge 완료

##### Container 컴포넌트(상위), Presenter 컴포넌트(하위)로 나누어서 하나의 컴포넌트(상위)가 모든 조작을 주관하는 방식으로 리팩토링: 덕분에 실시간 동기화 가능


##### 1. Presenter와 Container를 분류하는 작업을 할 예정
1. todoItems 배열 data와 created 라이프사이클에 만들어둔 함수를 app.vue로 꺼내 옴
   1. localStorage의 데이터가 app.vue의 todoItems로 관리되는 것임: 상위 컴포넌트에서 정보를 관리하고 이것을 props로 하위 컴포넌트(TodoList.vue로 내려보낼 것)
   2. 그러면 TodoList.vue에서 props로 배열을 받아주고 받은 데이터를 뿌려주는 작업 진행.


##### 2. input 시 로컬스토리지에 바로바로 저장되고 있으나 스크린에는 동시 업데이트 x (리스트 component에 해당 사실을 알리지는 않음)
1. v-on:하위컴포넌트에서 발생시킨 이벤트 이름 ="상위컴포넌트의 메소드이름"
2. TodoInput이 presenter가 되는 것임. 동시에 App.vue 상위 컴포넌트는 container가 되는 것.
3. 하위컴포넌트에서 $emit('트리거(발생시킨이벤트이름', 인자1(this.newTodoItem),...,...) 이런식으로 호출하듯 불러주면 상위 컴포넌트에서 $emit에 지정된 트리거 발생시 설정된 메소드가 호출!
4. 그러면 바로바로 업데이트된다. app의 사이클 안에서 모든 작업이 끝나는 것이기 때문에.


##### 3. delete 역시 로컬스토리지에 바로바로 저장되고 있으나 스크린에는 동시 업데이트 x (리스트 component에 해당 사실을 알리지는 않음)
1. v-on:하위컴포넌트에서 발생시킨 이벤트 이름 = "상위 컴포넌트의 메소드 이름"
2. TodoList가 presenter가 되고 App.vue가 상위가 된다.
3. 하위 컴포넌트에서 this.$emit('removeOneItem', todoItem, index)로 인자와 이름을 올려보내면 상위 컴포넌트에서 이를 받음.
4. removeTodoItem 이렇게 이름을 붙여서 호출 -> removeTodoItem 발생시 removeOneItem이 호출되도록 v-on:removeTodoItem="removeOneItem" 작성
5. 그러면 removeOneItem 메소드가 호출된다.
6. removeOneItem 메소드에 인자였던 todoItem이 객체라 key 값을 지우려면 todoItem.item을 지워야 하는 문제가 있었음. ---> 해결


##### 4. clear All로 다 지우게 되면 역시 local Storage는 즉각적으로 비워지지만 screen으로 바로바로 업데이트 되지 않음(상호 통신x)
1. 위와 같은 방식으로 해결함.


##### 5. 할일 완료 시 좀 더 좋은 패턴으로 보완할 수 있음.
1. todoItems를 기존에 상위컴포넌트에서props로 내렸음.
2. 하위 컴포넌트에서 받은 props로 작업을 하고 그걸 다시 상위 컴포넌트로 올린 상황인데 그걸 사용하는 것보다 지금 상위 컴포넌트에 이미 존재하는 data에 접근하는 것이 더 나은 선택지.
3. 그르면 index값만 넘겨주어도 되지 않나?



