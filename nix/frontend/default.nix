{
  self,
  lib,
  config,
  dream2nix,
  ...
}: {
  imports = [
    dream2nix.modules.dream2nix.nodejs-package-lock-v3
    dream2nix.modules.dream2nix.nodejs-granular-v3
  ];

  mkDerivation = {
    src = ../../.;
    buildInputs = [config.deps.nodejs_22];

    installPhase = ''
      mkdir -p $out
      cp -r joka00.dev/dist/apps/${config.name}/browser $out/
    '';
  };
  deps = {nixpkgs, ...}: {
    inherit
      (nixpkgs)
      fetchFromGitHub
      stdenv
      nodejs_22
      faketty
      ;
  };

  nodejs-package-lock-v3 = {
    packageLockFile = "${config.mkDerivation.src}/package-lock.json";
  };
  nodejs-granular-v3 = {
    runBuild = true;
    buildScript = "${config.deps.faketty}/bin/faketty nx run ${config.name}:build:production";
  };

  name = "frontend";
  version = "0.1.0";
}
