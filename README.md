# Ver02 Branch
##### Presenter와 Container를 분류하는 작업을 할 예정
1. todoItems 배열 data와 created 라이프사이클에 만들어둔 함수를 app.vue로 꺼내 옴
   1. localStorage의 데이터가 app.vue의 todoItems로 관리되는 것임: 상위 컴포넌트에서 정보를 관리하고 이것을 props로 하위 컴포넌트(TodoList.vue로 내려보낼 것)
   2. 그러면 TodoList.vue에서 props로 배열을 받아주고 받은 데이터를 뿌려주는 작업 진행.


##### input 시 로컬스토리지에 바로바로 저장되고 있으나 스크린에는 동시 업데이트 x (리스트 component에 해당 사실을 알리지는 않음)
1. v-on:하위컴포넌트에서 발생시킨 이벤트 이름 ="상위컴포넌트의 메소드이름"
2. TodoInput이 presenter가 되는 것임. 동시에 App.vue 상위 컴포넌트는 container가 되는 것.
3. 하위컴포넌트에서 $emit('트리거(발생시킨이벤트이름', 인자1(this.newTodoItem),...,...) 이런식으로 호출하듯 불러주면 상위 컴포넌트에서 $emit에 지정된 트리거 발생시 설정된 메소드가 호출!
4. 그러면 바로바로 업데이트된다. app의 사이클 안에서 모든 작업이 끝나는 것이기 때문에.


##### clear All로 다 지우게 되면 역시 local Storage는 즉각적으로 비워지지만 screen으로 바로바로 업데이트 되지 않음(상호 통신x)

