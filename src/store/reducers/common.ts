export const ALERT = 'common/ALERT' as const;

export interface IAlertInfo {
  type: string;
  text: string;
  time: number;
}

export interface ICommonState {
  alertInfo: IAlertInfo;
}

export const alert = () => ({
  type: ALERT,
});

export type CommonAction = ReturnType<typeof alert>;

export const initialState = {
  alertInfo: {
    type: '',
    text: '',
    time: 3000,
  },
};

export default function (state: ICommonState = initialState, action: CommonAction) {
  switch (action.type) {
    case 'common/ALERT':
      return {
        ...state,
        alertInfo: {
          ...state.alertInfo,
        },
      };
    default:
      return state;
  }
}
