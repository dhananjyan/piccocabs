<?php
defined('BASEPATH') or exit('No direct script access allowed');

use Twilio\Rest\Client;

class Signup extends CI_Controller
{

    public function index() {
        echo "asdjfkasjdfkasdjf";


        $data = ['phone' => '+919025987889', 'text' => 'Hello, CI'];
        // print_r($this->sendSMS($data));
        echo "last";
    }

    protected function sendSMS($data) {
        // Your Account SID and Auth Token from twilio.com/console
        $sid = 'AC999243627c459829f3b74e59d0fa86a0';
        $token = '006c1682da6b5f68e58487e9cd97d813';
        $client = new Client($sid, $token);

        // Use the client to do fun stuff like send text messages!
        return $client->messages->create(
            // the number you'd like to send the message to
            $data['phone'],
            array(
                // A Twilio phone number you purchased at twilio.com/console
                "from" => "+16174778499",
                // the body of the text message you'd like to send
                'body' => $data['text']
            )
        );
    }
}
