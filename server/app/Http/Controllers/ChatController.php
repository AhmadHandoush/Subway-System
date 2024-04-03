<?php

namespace App\Http\Controllers;

use App\Events\Message;
use Illuminate\Http\Request;

class ChatController extends Controller
{
     public function message(Request $request)
     {

        event(new Message(user_id: $request->input(key: "user_id"), message: $request->input(key: "message")));
        return[];
     }
}
