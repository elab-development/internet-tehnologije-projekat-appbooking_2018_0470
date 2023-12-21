<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReservationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public static $wrap='reservation';
    public function toArray($request)//: array
    {
        //return parent::toArray($request);
        return [
            'id' => $this->id,
            'apartment_id' => $this->resource->apartment_id,
            'apartment'=>$this->resource->apartment,
            'client_id' => $this->resource->client_id,
            'check_in_date' => $this->resource->check_in_date,
            'check_out_date' => $this->resource->check_out_date,
            'created_at' => $this->resource->created_at,
            'updated_at' => $this->resource->updated_at,
            'client'=>new ClientResource($this->resource->client)
            
            //'client'=>$this->resource->client
        ];
    }
}
