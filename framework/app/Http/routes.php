<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/* Front end */
Route::get('/', 'FrontController@index');
Route::post('book_flat', 'FrontController@bookFlat');
Route::post('send_pdf/{id}', 'FrontController@sendPdf');
/* */

/* Back end */
Route::get('user', 'UsersController@edit');
Route::get('admin', 'FlatsController@index');
Route::patch('user/{id}', 'UsersController@update');
Route::resource('flats', 'FlatsController');
Route::post('flats/{id}', 'FlatsController@destroyImage');

Route::get('gallery/interior', 'GalleryController@interior');
Route::get('gallery/exterior', 'GalleryController@exterior');
Route::post('gallery', 'GalleryController@save');
Route::post('gallery/{id}', 'GalleryController@destroy');

Route::get('login', 'Auth\AuthController@showLoginForm');
Route::post('login', 'Auth\AuthController@login');
Route::get('logout', 'Auth\AuthController@logout');

// Password Reset Routes...
Route::get('password/reset/{token?}', 'Auth\PasswordController@showResetForm');
Route::post('password/email', 'Auth\PasswordController@sendResetLinkEmail');
Route::post('password/reset', 'Auth\PasswordController@reset');
/* */