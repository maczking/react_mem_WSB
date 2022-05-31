const initialState = [
  {
    uuid: "74740d06-e111-11ec-9d64-0242ac120002",
    title: "Testy",
    mem_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzT-56KLN4hetoz9TLOs2s202ex0wEC6IMg&usqp=CAU",
    added_datetime: "2022-05-16T16:35:45.881Z",
    upvotes: 0,
    downvotes: 0,
  },
  {
    uuid: "74740f7c-e111-11ec-9d64-0242ac120002",
    title: "Deploy",
    mem_image: "https://media.makeameme.org/created/deploy-on-a.jpg",
    added_datetime: "2022-05-16T06:54:45.881Z",
    upvotes: 1,
    downvotes: 0,
  },
  {
    uuid: "747410b2-e111-11ec-9d64-0242ac120002",
    title: "Scrum master",
    mem_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-p3GSpFwepqBcKPfUCG2yKUF35bw_RYfBg&usqp=CAU",
    added_datetime: "2022-05-16T18:01:45.881Z",
    upvotes: 2,
    downvotes: 0,
  },

  {
    uuid: "747411c0-e111-11ec-9d64-0242ac120002",
    title: "LinkedIn",
    mem_image:
      "https://www.blasty.pl/m/upload/images/large/2017/04/kiedy-programista-wrzuci-swoje-cv-na_2017-04-28_23-07-43.jpg",
    added_datetime: "2022-05-16T14:12:45.881Z",
    upvotes: 3,
    downvotes: 0,
  },
  {
    uuid: "747412e2-e111-11ec-9d64-0242ac120002",
    title: "JavaScript",
    mem_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dx9GEcp0Bt1Ho0P2nh4iNiIg32nmC7XdMQ&usqp=CAU",
    added_datetime: "2022-05-16T09:36:45.881Z",
    upvotes: 4,
    downvotes: 0,
  },
  {
    uuid: "74741404-e111-11ec-9d64-0242ac120002",
    title: "CSS",
    mem_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnyH9gzdI3OEwC1v1zyY2mHMbf2KYpOr9BcQ&usqp=CAU",
    added_datetime: "2022-05-16T22:35:45.881Z",
    upvotes: 5,
    downvotes: 0,
  },
  {
    uuid: "74741512-e111-11ec-9d64-0242ac120002",
    title: "Java",
    mem_image:
      "https://fabrykamemow.pl/uimages/services/fabrykamemow/i18n/pl_PL/201309/1378109096_by_Hoinkas_500.jpg",
    added_datetime: "2022-05-16T22:35:45.881Z",
    upvotes: 6,
    downvotes: 0,
  },
  {
    uuid: "74741f76-e111-11ec-9d64-0242ac120002",
    title: "Refactor",
    mem_image: "https://www.memecreator.org/static/images/memes/5052686.jpg",
    added_datetime: "2022-05-16T22:35:45.881Z",
    upvotes: 7,
    downvotes: 0,
  },
  {
    uuid: "74742264-e111-11ec-9d64-0242ac120002",
    title: "Junior dev",
    mem_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRR8CFyOLhnFbaHJ1N8p8S7gzcCSzTyn29g&usqp=CAU",
    added_datetime: "2022-05-16T22:35:45.881Z",
    upvotes: 8,
    downvotes: 0,
  },
  {
    uuid: "7474237c-e111-11ec-9d64-0242ac120002",
    title: "Code review",
    mem_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-KzdKHqk-gxO9Bt0tGIYAkiW8VVjVDhEMw&usqp=CAU",
    added_datetime: "2022-05-16T22:35:45.881Z",
    upvotes: 9,
    downvotes: 0,
  },
];

const memReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "VOTE_MEM":
      return state.map((mem) => {
        const { uuid: mem_uuid, upvotes } = mem;
        const { uuid: payload_uuid } = payload;
        if (mem_uuid === payload_uuid) {
          return {
            ...mem,
            upvotes: upvotes + 1,
          };
        } else return mem;
      });
    case "DOWNVOTE_MEM":
      return state.map((mem) => {
        const { uuid: mem_uuid, downvotes } = mem;
        const { uuid: payload_uuid } = payload;
        if (mem_uuid === payload_uuid) {
          return {
            ...mem,
            downvotes: downvotes + 1,
          };
        } else return mem;
      });
    case "ADD_MEM":
      return [
        {
          ...payload,
          added_datetime: new Date(),
          upvotes: 0,
          downvotes: 0,
        },
        ...state,
      ];
    default:
      return state;
  }
};
export default memReducer;
