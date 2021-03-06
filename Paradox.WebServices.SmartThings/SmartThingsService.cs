﻿using Paradox.WebServices.ServiceModel.SmartThings.Request;
using Paradox.WebServices.ServiceModel.SmartThings.Response;
using Paradox.WebServices.SmartThings.Settings;
using ServiceStack;
using SettingsProviderNet;

namespace Paradox.WebServices.SmartThings
{
    public class SmartThingsService : IService
    {
        private readonly SmartThingsSettings settings;

        public SmartThingsService(SmartThingsSettings settings)
        {
            this.settings = settings;
        }

        public ResponseStatus Put(SmartThingsSettingsRequest request)
        {
            // always reset values
            settings.AccessToken = request.AccessToken;
            settings.Location = request.Location;
            settings.ApplicationId = request.AppId;

            var settingsProvider = new SettingsProvider(new RoamingAppDataStorage("Paradox"));
            settingsProvider.SaveSettings(settings);

            var cb = new SmartThingsCallbacks(settings);

            return !cb.Authorization() ? new ResponseStatus("404", "Couldn't connect to ST hub") : new ResponseStatus();
        }

        public ResponseStatus Get(SmartThingsSettingsResetRequest request)
        {
            settings.AccessToken = null;
            settings.Location = null;
            settings.ApplicationId = null;

            var settingsProvider = new SettingsProvider(new RoamingAppDataStorage("Paradox"));
            settingsProvider.SaveSettings(settings);

            var cb = new SmartThingsCallbacks(settings);

            return !cb.AuthorizationRevoke() ? new ResponseStatus("404", "Couldn't connect to ST hub") : new ResponseStatus();
        }

        public StatusResponse Get(SmartThingsStatusRequest request)
        {
            if (!string.IsNullOrEmpty(settings.AccessToken))
                return new StatusResponse(){IsOk = true, Action = "status"};

            return new StatusResponse(){Action = "status", IsOk = false};
            
        }
      
    }
}
