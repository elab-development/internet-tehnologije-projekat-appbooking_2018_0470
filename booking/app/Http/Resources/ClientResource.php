<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request)//: array
    {
       // return parent::toArray($request);
       return [
        'id' => $this->resource->id,
        'name' => $this->resource->name,
        'email' => $this->resource->email,
        'email_verified_at'=>$this->resource->email_verified_at,
        'phone' => $this->resource->phone,
        'password'=>$this->resource->password,
        'created_at' => $this->resource->created_at,
        'updated_at' => $this->resource->updated_at,
    ];
    }
}
