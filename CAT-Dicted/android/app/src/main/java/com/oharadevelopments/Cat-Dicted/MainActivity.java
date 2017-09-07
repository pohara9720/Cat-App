package com.oharadevelopments.Cat-Dicted;
import com.tkporter.sendsms.SendSMSPackage;
import android.os.Bundle;

import com.facebook.react.ReactPackage;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.oharadevelopments.Cat-Dicted.generated.ExponentBuildConstants;
import host.exp.expoview.ExponentActivity;
android:launchMode="singleTask"
public class MainActivity extends ExponentActivity {

  @Override
  public String publishedUrl() {
    return "exp://exp.host/@pohara9720/exp.host/@pohara9720/native-component-list";
  }

  @Override
  public String developmentUrl() {
    return ExponentBuildConstants.DEVELOPMENT_URL;
  }

  @Override
  public List<String> sdkVersions() {
    return new ArrayList<>(Arrays.asList("17.0.0"));
  }

  @Override
  public List<ReactPackage> reactPackages() {
    return ((MainApplication) getApplication()).getPackages();
  }

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @Override
  public Bundle initialProps(Bundle expBundle) {
    // Add extra initialProps here
    return expBundle;
  }
  @Override
public void onActivityResult(int requestCode, int resultCode, Intent data) {
    //probably some other stuff here
    SendSMSPackage.getInstance().onActivityResult(requestCode, resultCode, data);
}

}
