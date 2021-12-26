export const ALERT = 'common/ALERT' as const;

export interface IAlertInfo {
  type: string;
  text: string;
  time: number;
}

export interface ICommonState {
  alertInfo: IAlertInfo;
}

export const initialState = {
  alertInfo: {
    type: '',
    text: '',
    time: 3000,
  },
};

export const alert = (payload?: IAlertInfo) => ({
  type: ALERT,
  payload,
});

export type CommonAction = ReturnType<typeof alert>;

export default function (state: ICommonState = initialState, action: CommonAction) {
  switch (action.type) {
    case 'common/ALERT':
      return {
        ...state,
        alertInfo: {
          ...state.alertInfo,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}
