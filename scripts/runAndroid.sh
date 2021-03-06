#!/usr/bin/env bash

# original: https://docs.microsoft.com/en-us/azure/devops/pipelines/ecosystems/android?view=azure-devops#test-on-the-android-emulator

echo "y" | $ANDROID_HOME/tools/bin/sdkmanager --install 'system-images;android-27;google_apis;x86'

$ANDROID_HOME/platform-tools/adb devices

echo "no" | $ANDROID_HOME/tools/bin/avdmanager create avd -n test_android_emulator -k 'system-images;android-27;google_apis;x86' --force

nohup $ANDROID_HOME/emulator/emulator -avd test_android_emulator -no-boot-anim -no-window -no-audio -no-snapshot > /dev/null 2>&1 &
$ANDROID_HOME/platform-tools/adb wait-for-device shell 'while [[ -z $(getprop sys.boot_completed | tr -d '\r') ]]; do sleep 1; done; input keyevent 82' 

echo "Emulator started"
