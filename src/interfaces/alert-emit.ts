import {AlertType} from './alert-type';
import {AlertSettings} from './alert-settings';

export interface AlertEmit {
  close?: boolean;
  message?: any;
  title?: any;
  type?: AlertType;
  override?: AlertSettings;
}
