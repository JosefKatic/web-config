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
    src = config.paths.projectRoot;
    buildInputs = [config.deps.nodejs_20 config.deps.webpack-cli];

    installPhase = ''
      mkdir -p $out
      cp -r joka00.dev/dist/apps/${config.name} $out/
    '';
  };
  deps = {nixpkgs, ...}: {
    inherit
      (nixpkgs)
      fetchFromGitHub
      stdenv
      nodejs_20
      faketty
      ;
    inherit (nixpkgs.nodePackages) webpack-cli;
  };

  nodejs-package-lock-v3 = {
    packageLockFile = "${config.mkDerivation.src}/package-lock.json";
  };
  nodejs-granular-v3 = {
    runBuild = true;
    buildScript = "${config.deps.faketty}/bin/faketty nx build api --verbose --skip-nx-cache";
  };

  name = "api";
  version = "0.1.0";
}
