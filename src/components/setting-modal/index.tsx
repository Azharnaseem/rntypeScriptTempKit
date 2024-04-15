import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useDispatch } from 'react-redux';
import { DropDownMenu } from '~components';
import { setIsLoggedIn, setUserMeta } from '~redux/slices/user';

interface SettingModalProps {}

export interface SettingModalRef {
  show: () => void;
  hide: () => void;
}

const SettingModal: React.ForwardRefRenderFunction<SettingModalRef, SettingModalProps> = (
  {},
  ref
) => {
  const dispatch = useDispatch();
  const [isVisible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    show: function () {
      setVisible(true);
    },
    hide: function () {
      setVisible(false);
    },
  }));

  return (
    <DropDownMenu
      isVisible={isVisible}
      firstBtnText="Logout"
      secondBtnText="Settings"
      onPressFirstBtn={() => {
        setVisible(false);
        setTimeout(() => {
          dispatch(setUserMeta(null));
          dispatch(setIsLoggedIn(false));
        }, 600);
      }}
      onPressSecondBtn={() => {}}
      onPressThirdBtn={() => {}}
      onClose={() => setVisible(false)}
    />
  );
};

export default forwardRef<SettingModalRef, SettingModalProps>(SettingModal);
