import React from 'react';
import PublishPrivacySettingContainer from './PublishPrivacySettingContainer';
import PublishURLSettingContainer from './PublishURLSettingContainer';
import PublishSeriesSectionContainer from './PublishSeriesSectionContainer';
import PublishActionButtonsContainer from './PublishActionButtonsContainer';
import PublishCaptchaContainer from './PublishCaptchaContainer';
import { TurnstileProvider } from '../../lib/hooks/useTurnstile';

export interface PublishSettingsProps {}

const PublishSettings: React.FC<PublishSettingsProps> = () => {
  return (
    <TurnstileProvider>
      <div>
        <PublishPrivacySettingContainer />
        <PublishURLSettingContainer />
        <PublishSeriesSectionContainer />
        <PublishCaptchaContainer />
      </div>
      <PublishActionButtonsContainer />
    </TurnstileProvider>
  );
};

export default PublishSettings;
