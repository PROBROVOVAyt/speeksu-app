// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use speeksu_lib;

fn main() {
    speeksu_lib::run()
}
