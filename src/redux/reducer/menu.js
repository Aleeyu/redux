const SHOWMENU = 'SHOWMENU';
const HIDEMENU = 'HIDEMENU';
const initState = {
    showmenu: false,
    selectedTab: null
};

export function menu(state=initState, action) {
  switch (action.type) {
    case SHOWMENU:
      return {...state, showmenu:true,selectedTab: action.selectedTab};
    case HIDEMENU:
      return {...state,showmenu:false, selectedTab: null};
    default:
      return state;
  }
}