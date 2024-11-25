{pkgs ? import <nixpkgs> {}, ...}: {
  default = pkgs.mkShell {
    NIX_CONFIG = "extra-experimental-features = nix-command flakes ca-derivations";
    nativeBuildInputs = with pkgs; [
      nix
      git
      python3
      nodejs_20
    ];
  };
}
